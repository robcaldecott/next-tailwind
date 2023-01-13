import { ReactNode, useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import {
  List,
  ListItem,
  ListItemLink,
  ListItemText,
  PageError,
  Paper,
  SearchField,
  Skeleton,
  Text,
} from "@/components";
import { useFilter } from "@/providers";
import { useVehicles } from "@/queries";
import type { Vehicle } from "@/types";

function Loading() {
  const intl = useIntl();

  return (
    <Paper
      aria-label={intl.formatMessage({
        id: "loadingVehicles",
        defaultMessage: "Loading vehicles",
      })}
    >
      <Text
        variant="h3"
        component="h1"
        className="border-b border-b-slate-300 p-4"
      >
        <Skeleton />
      </Text>
      <List dividers>
        {[...Array(10).keys()].map((key) => (
          <ListItem key={key}>
            <ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

function NoResults() {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <InformationCircleIcon className="h-16 w-16 text-indigo-700 dark:text-indigo-400" />

      <Text variant="h2" component="h2" align="center">
        <FormattedMessage
          id="noResultsTitle"
          defaultMessage="No matching vehicles found."
        />
      </Text>

      <Text variant="body1" align="center" color="secondary">
        <FormattedMessage
          id="noResultsMessage"
          defaultMessage="Please try a different filter."
        />
      </Text>
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
}

function Badge(props: BadgeProps) {
  return (
    <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sky-700 px-2 font-sans text-xs font-medium text-white dark:bg-sky-500">
      {props.children}
    </span>
  );
}

function filterItems(data: Vehicle[], filter: string) {
  return data.filter((vehicle) => {
    if (filter === "") {
      return true;
    }
    const re = new RegExp(filter, "i");
    const description = `${vehicle.manufacturer} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`;
    return description.search(re) !== -1;
  });
}

interface DataProps {
  data?: Vehicle[];
}

export function Data({ data = [] }: DataProps) {
  const intl = useIntl();
  const { filter, setFilter } = useFilter();
  const [items, setItems] = useState(filterItems(data, filter));
  useEffect(() => void setItems(filterItems(data, filter)), [filter, data]);

  return (
    <Paper
      aria-label={intl.formatMessage({
        id: "vehicleList",
        defaultMessage: "Vehicle list",
      })}
    >
      <div className="border-b border-b-slate-300 bg-sky-50 p-4 dark:bg-sky-900">
        <div className="flex flex-wrap items-center space-y-4 md:flex-nowrap md:space-y-0">
          <div className="flex grow basis-full items-center space-x-2">
            <Text variant="h2" component="h1">
              <FormattedMessage id="vehiclesTitle" defaultMessage="Vehicles" />
            </Text>
            <Badge>{items.length}</Badge>
          </div>

          <SearchField
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder={intl.formatMessage({
              id: "searchPlaceholder",
              defaultMessage: "Search",
            })}
            className="basis-full md:basis-1/3"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <NoResults />
      ) : (
        <List dividers>
          {items.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehicles/${vehicle.id}`}
              passHref
              legacyBehavior
            >
              <ListItemLink>
                <ListItemText
                  primary={`${vehicle.manufacturer} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`}
                  secondary={vehicle.registrationNumber}
                />
                <ChevronRightIcon className="h-6 w-6 shrink-0 text-slate-500" />
              </ListItemLink>
            </Link>
          ))}
        </List>
      )}
    </Paper>
  );
}

const Error = PageError;

interface VehiclesProps {
  fabPadding?: boolean;
}

export function Vehicles(props: VehiclesProps) {
  const { isLoading, isSuccess, data, isError, error, refetch } = useVehicles();

  return (
    <div className={clsx("mx-auto max-w-5xl", props.fabPadding && "mb-24")}>
      {isLoading && <Loading />}
      {isSuccess && <Data data={data} />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  );
}

Vehicles.Loading = Loading;
Vehicles.Data = Data;
Vehicles.Error = Error;
