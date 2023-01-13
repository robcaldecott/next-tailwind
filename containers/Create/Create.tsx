import { useForm } from "react-hook-form";
import { FormattedMessage, IntlShape, useIntl } from "react-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import { useRouter } from "next/router";
import { z } from "zod";
import {
  Breadcrumbs,
  Button,
  Paper,
  Select,
  Text,
  TextField,
} from "@/components";
import { colors, fuelTypes, manufacturers } from "@/mocks";
import type { Vehicle, VehiclePayload } from "@/types";

function schema(intl: IntlShape) {
  return z.object({
    manufacturer: z.string().min(1, {
      message: intl.formatMessage({
        id: "makeError",
        defaultMessage: "Please select a make",
      }),
    }),
    model: z.string().min(1, {
      message: intl.formatMessage({
        id: "modelError",
        defaultMessage: "Please enter the model",
      }),
    }),
    type: z.string().min(1, {
      message: intl.formatMessage({
        id: "variantError",
        defaultMessage: "Please enter the variant",
      }),
    }),
    fuel: z.string().min(1, {
      message: intl.formatMessage({
        id: "fuelError",
        defaultMessage: "Please select a fuel type",
      }),
    }),
    color: z.string().min(1, {
      message: intl.formatMessage({
        id: "colorError",
        defaultMessage: "Please select a colour",
      }),
    }),
    registrationNumber: z.string().min(1, {
      message: intl.formatMessage({
        id: "registrationNumberError",
        defaultMessage: "Please enter the registration number",
      }),
    }),
    vin: z.string().min(1, {
      message: intl.formatMessage({
        id: "vinError",
        defaultMessage: "Please enter the VIN",
      }),
    }),
    mileage: z
      .number({
        invalid_type_error: intl.formatMessage({
          id: "invalidMileageError",
          defaultMessage: "Please enter a valid mileage",
        }),
      })
      .min(1, {
        message: intl.formatMessage({
          id: "noMileageError",
          defaultMessage: "Please enter the mileage",
        }),
      }),
    registrationDate: z.string().min(1, {
      message: intl.formatMessage({
        id: "registrationDateError",
        defaultMessage: "Please enter the registration date",
      }),
    }),
  });
}

export function Create() {
  const intl = useIntl();
  const router = useRouter();
  const { mutate, isLoading } = useMutation<Vehicle, Response, VehiclePayload>(
    (body) => ky.post("/api/vehicles", { json: body }).json()
  );
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<VehiclePayload>({
    defaultValues: {
      manufacturer: "",
      model: "",
      type: "",
      fuel: "",
      color: "",
      registrationNumber: "",
      vin: "",
      mileage: 0,
      registrationDate: "",
    },
    resolver: zodResolver(schema(intl)),
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => router.push("/"),
    });
  });

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs />

      <Paper>
        <Text
          className="border-b border-b-slate-300 bg-sky-50 p-4 dark:border-b-slate-600 dark:bg-sky-900"
          variant="h2"
          component="h2"
        >
          <FormattedMessage
            id="createTitle"
            defaultMessage="Create new vehicle"
          />
        </Text>

        <form onSubmit={onSubmit}>
          {/* Field grid */}
          <div className="grid grid-cols-12 gap-4 p-4">
            <Select
              label={intl.formatMessage({
                id: "make",
                defaultMessage: "Make",
              })}
              className="col-span-12 md:col-span-4"
              {...register("manufacturer")}
              error={errors.manufacturer?.message}
              disabled={isLoading}
            >
              <option value="" disabled>
                {intl.formatMessage({
                  id: "selectMake",
                  defaultMessage: "Select a make",
                })}
              </option>
              {manufacturers().map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </Select>

            <TextField
              label={intl.formatMessage({
                id: "model",
                defaultMessage: "Model",
              })}
              className="col-span-12 md:col-span-4"
              {...register("model")}
              error={errors.model?.message}
              disabled={isLoading}
            />

            <TextField
              label={intl.formatMessage({
                id: "variant",
                defaultMessage: "Variant",
              })}
              className="col-span-12 md:col-span-4"
              {...register("type")}
              error={errors.type?.message}
              disabled={isLoading}
            />

            <Select
              label={intl.formatMessage({
                id: "fuel",
                defaultMessage: "Fuel",
              })}
              className="col-span-12 md:col-span-6"
              {...register("fuel")}
              error={errors.fuel?.message}
              disabled={isLoading}
            >
              <option value="" disabled>
                {intl.formatMessage({
                  id: "selectFuel",
                  defaultMessage: "Select a fuel type",
                })}
              </option>
              {fuelTypes().map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </Select>

            <Select
              label={intl.formatMessage({
                id: "color",
                defaultMessage: "Colour",
              })}
              className="col-span-12 md:col-span-6"
              {...register("color")}
              error={errors.color?.message}
              disabled={isLoading}
            >
              <option value="" disabled>
                {intl.formatMessage({
                  id: "selectColor",
                  defaultMessage: "Select a colour",
                })}
              </option>
              {colors().map((color) => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </Select>

            <TextField
              label={intl.formatMessage({
                id: "registrationNumber",
                defaultMessage: "Registration number",
              })}
              className="col-span-12 md:col-span-6"
              {...register("registrationNumber")}
              error={errors.registrationNumber?.message}
              disabled={isLoading}
            />

            <TextField
              label={intl.formatMessage({
                id: "vin",
                defaultMessage: "VIN",
              })}
              className="col-span-12 md:col-span-6"
              {...register("vin")}
              error={errors.vin?.message}
              disabled={isLoading}
            />

            <TextField
              label={intl.formatMessage({
                id: "mileage",
                defaultMessage: "Mileage",
              })}
              inputMode="numeric"
              className="col-span-12 md:col-span-6"
              {...register("mileage", { valueAsNumber: true })}
              error={errors.mileage?.message}
              disabled={isLoading}
            />

            <TextField
              label={intl.formatMessage({
                id: "registrationDate",
                defaultMessage: "Registration date",
              })}
              type="date"
              className="col-span-12 md:col-span-6"
              {...register("registrationDate")}
              error={errors.registrationDate?.message}
              disabled={isLoading}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-between space-x-4 space-y-4 border-t border-t-slate-300 bg-sky-50 p-4 dark:border-t-slate-600 dark:bg-sky-900 md:flex-nowrap md:space-y-0">
            <Button
              type="button"
              variant="secondary"
              onClick={() => reset()}
              disabled={isLoading}
              className="basis-full md:basis-auto"
            >
              <FormattedMessage id="reset" defaultMessage="Reset" />
            </Button>

            <div className="flex basis-full justify-center space-x-2 md:basis-auto">
              <Button
                type="button"
                variant="secondary"
                onClick={() => router.push("/")}
                disabled={isLoading}
              >
                <FormattedMessage id="cancel" defaultMessage="Cancel" />
              </Button>

              <Button type="submit" disabled={isLoading}>
                <FormattedMessage id="create" defaultMessage="Create" />
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
}
