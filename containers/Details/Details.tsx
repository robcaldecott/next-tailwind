import type { ReactNode } from "react";
import { useState } from "react";
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ky from "ky";
import { useRouter } from "next/router";
import {
  Alert,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  PageError,
  Skeleton,
} from "@/components";
import type { Vehicle } from "@/types";
import { DeleteDialog } from "./DeleteDialog";

function Loading() {
  const intl = useIntl();

  return (
    <>
      <Breadcrumbs />

      <Card
        aria-label={intl.formatMessage({
          id: "loadingVehicle",
          defaultMessage: "Loading vehicle",
        })}
      >
        <CardHeader
          title={<Skeleton />}
          subheader={<Skeleton />}
          divider
          className="bg-sky-50"
        />
        <CardContent>
          {[...Array(16).keys()].map((key) => (
            <Skeleton key={key} height={20} />
          ))}
        </CardContent>
      </Card>
    </>
  );
}

interface SwatchProps {
  color: string;
}

function Swatch(props: SwatchProps) {
  return (
    <div className="flex items-center space-x-1">
      <span
        className="inline-block h-4 w-4 rounded-full border border-slate-300"
        style={{ backgroundColor: props.color.replace(/ /g, "") }}
      />
      <span>{props.color.charAt(0).toUpperCase() + props.color.slice(1)}</span>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: ReactNode;
  value: ReactNode;
}

function Field(props: FieldProps) {
  return (
    <>
      <dt
        id={props.id}
        className="mt-4 font-sans text-base font-medium text-slate-900 first:mt-0 dark:text-white"
      >
        {props.label}
      </dt>
      <dd
        className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
        aria-labelledby={props.id}
      >
        {props.value}
      </dd>
    </>
  );
}

interface DataProps {
  data: Vehicle;
}

function Data(props: DataProps) {
  const queryClient = useQueryClient();
  const intl = useIntl();
  const [showDialog, setShowDialog] = useState(false);
  const { mutate, isError, error, reset } = useMutation<
    Vehicle,
    Error,
    string,
    Vehicle[]
  >((id) => ky.delete(`/api/vehicles/${id}`).json(), {
    onMutate: async (id) => {
      await queryClient.cancelQueries(["vehicles"]);
      // Remove the vehicles immediately
      const previous = queryClient.getQueryData<Vehicle[]>(["vehicles"]);
      if (previous) {
        queryClient.setQueryData(
          ["vehicles"],
          previous.filter((vehicle) => vehicle.id !== id)
        );
      }
      return previous;
    },
    onError: (error, id, context) => {
      // Revert the original list of vehicles on error
      if (context) {
        queryClient.setQueryData(["vehicles"], context);
      }
    },
    onSettled: () => {
      // Fetch the list of new vehicles
      queryClient.invalidateQueries(["vehicles"]);
    },
  });
  const router = useRouter();

  return (
    <>
      <Breadcrumbs registrationNumber={props.data.registrationNumber} />

      <Card
        aria-label={intl.formatMessage({
          id: "vehicleDetails",
          defaultMessage: "Vehicle details",
        })}
      >
        <CardHeader
          title={`${props.data.manufacturer} ${props.data.model} ${props.data.type}`}
          subheader={props.data.registrationNumber}
          divider
        />
        <CardContent divider>
          <dl>
            {/* Color */}
            <Field
              id="color"
              label={<FormattedMessage id="color" defaultMessage="Colour" />}
              value={<Swatch color={props.data.color} />}
            />

            {/* Fuel */}
            <Field
              id="fuel"
              label={<FormattedMessage id="fuel" defaultMessage="Fuel" />}
              value={props.data.fuel}
            />

            {/* VIN */}
            <Field
              id="vin"
              label={<FormattedMessage id="vin" defaultMessage="VIN" />}
              value={props.data.vin}
            />

            {/* Mileage */}
            <Field
              id="mileage"
              label={<FormattedMessage id="mileage" defaultMessage="Mileage" />}
              value={<FormattedNumber value={props.data.mileage} />}
            />

            {/* Registration date */}
            <Field
              id="date"
              label={
                <FormattedMessage
                  id="registrationDate"
                  defaultMessage="Registration date"
                />
              }
              value={
                <FormattedMessage
                  id="fullRegistrationDate"
                  defaultMessage="{date, date, full}"
                  values={{ date: new Date(props.data.registrationDate) }}
                />
              }
            />
          </dl>
        </CardContent>
        <CardActions>
          {isError ? (
            <Alert
              grow
              label={error.message}
              action={
                <Button variant="secondary" onClick={reset}>
                  <FormattedMessage id="close" defaultMessage="Close" />
                </Button>
              }
            />
          ) : (
            <Button
              variant="error"
              onClick={() => {
                setShowDialog(true);
              }}
            >
              <FormattedMessage
                id="deleteVehicle"
                defaultMessage="Delete vehicle"
              />
            </Button>
          )}
        </CardActions>
      </Card>

      <DeleteDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onDelete={() => {
          mutate(props.data.id, {
            onSuccess: () => {
              router.replace("/");
            },
            onSettled: () => {
              setShowDialog(false);
            },
          });
        }}
      />
    </>
  );
}

const Error = PageError;

interface DetailsProps {
  id: string;
}

export const Details = ({ id }: DetailsProps) => {
  const { isLoading, isSuccess, data, isError, error, refetch } = useQuery<
    Vehicle,
    Error
  >({
    queryKey: ["vehicle", id],
    queryFn: () => ky.get(`/api/vehicles/${id}`).json(),
  });

  return (
    <div className="mx-auto max-w-3xl">
      {isLoading && <Loading />}
      {isSuccess && <Data data={data} />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  );
};

Details.Loading = Loading;
Details.Data = Data;
Details.Error = Error;
