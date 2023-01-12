import type { ElementType } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import clsx from "clsx";
import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import { useRouter } from "next/router";
import {
  Breadcrumbs,
  Button,
  Paper,
  Select,
  Text,
  TextField,
} from "@/components";
import { colors, fuelTypes, manufacturers } from "@/mocks";
import { useCreateVehicle } from "@/queries";
import type { VehiclePayload } from "@/types";

interface FormikFieldProps extends FieldProps {
  component: ElementType;
  width: 4 | 6;
}

const FormikField = ({
  component: Component,
  width = 4,
  field,
  form: { isSubmitting, isValid, touched, errors },
  ...props
}: FormikFieldProps) => {
  return (
    <Component
      className={clsx(
        "col-span-12",
        width === 4 && "md:col-span-4",
        width === 6 && "md:col-span-6"
      )}
      isRequired
      disabled={isSubmitting && isValid}
      error={touched[field.name] && errors[field.name]}
      {...field}
      {...props}
    />
  );
};

const FormikTextField = ({ component, ...props }: FormikFieldProps) => (
  <FormikField component={TextField} {...props} />
);

const FormikSelect = ({ component, ...props }: FormikFieldProps) => (
  <FormikField component={Select} {...props} />
);

interface Values extends Omit<VehiclePayload, "mileage"> {
  mileage: string;
  registrationDate: string;
}

export const Create = () => {
  const intl = useIntl();
  const router = useRouter();
  const { mutate } = useCreateVehicle();

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
        <Formik
          initialValues={
            {
              manufacturer: "",
              model: "",
              type: "",
              fuel: "",
              registrationNumber: "",
              vin: "",
              color: "",
              mileage: "",
              registrationDate: "",
            } as Values
          }
          validate={(values) => {
            let errors: FormikErrors<Values> = {};

            if (values.manufacturer === "") {
              errors.manufacturer = intl.formatMessage({
                id: "makeError",
                defaultMessage: "Please select a make",
              });
            }
            if (values.model === "") {
              errors.model = intl.formatMessage({
                id: "modelError",
                defaultMessage: "Please enter the model",
              });
            }
            if (values.type === "") {
              errors.type = intl.formatMessage({
                id: "variantError",
                defaultMessage: "Please enter the variant",
              });
            }
            if (values.fuel === "") {
              errors.fuel = intl.formatMessage({
                id: "fuelError",
                defaultMessage: "Please select a fuel type",
              });
            }
            if (values.registrationNumber === "") {
              errors.registrationNumber = intl.formatMessage({
                id: "registrationNumberError",
                defaultMessage: "Please enter the registration number",
              });
            }
            if (values.vin === "") {
              errors.vin = intl.formatMessage({
                id: "vinError",
                defaultMessage: "Please enter the VIN",
              });
            }
            if (values.color === "") {
              errors.color = intl.formatMessage({
                id: "colorError",
                defaultMessage: "Please select a colour",
              });
            }
            if (values.mileage === "") {
              errors.mileage = intl.formatMessage({
                id: "noMileageError",
                defaultMessage: "Please enter the mileage",
              });
            } else if (values.mileage.match(/^\d+$/) === null) {
              errors.mileage = intl.formatMessage({
                id: "invalidMileageError",
                defaultMessage: "Please enter a valid mileage",
              });
            }
            if (values.registrationDate === "") {
              errors.registrationDate = intl.formatMessage({
                id: "registrationDateError",
                defaultMessage: "Please enter the registration date",
              });
            }

            return errors;
          }}
          onSubmit={(values) => {
            mutate(
              {
                ...values,
                mileage: parseInt(values.mileage, 10),
              },
              {
                onSuccess: () => router.push("/"),
              }
            );
          }}
        >
          {({ resetForm, isSubmitting }) => (
            <Form>
              {/* Field grid */}
              <div className="grid grid-cols-12 gap-4 p-4">
                <Field
                  name="manufacturer"
                  component={FormikSelect}
                  label={intl.formatMessage({
                    id: "make",
                    defaultMessage: "Make",
                  })}
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
                </Field>

                <Field
                  name="model"
                  component={FormikTextField}
                  label={intl.formatMessage({
                    id: "model",
                    defaultMessage: "Model",
                  })}
                />

                <Field
                  name="type"
                  component={FormikTextField}
                  label={intl.formatMessage({
                    id: "variant",
                    defaultMessage: "Variant",
                  })}
                />

                <Field
                  name="fuel"
                  component={FormikSelect}
                  label={intl.formatMessage({
                    id: "fuel",
                    defaultMessage: "Fuel",
                  })}
                  width={6}
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
                </Field>

                <Field
                  name="color"
                  component={FormikSelect}
                  label={intl.formatMessage({
                    id: "color",
                    defaultMessage: "Colour",
                  })}
                  width={6}
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
                </Field>

                <Field
                  name="registrationNumber"
                  component={FormikTextField}
                  label={intl.formatMessage({
                    id: "registrationNumber",
                    defaultMessage: "Registration number",
                  })}
                  width={6}
                />

                <Field
                  name="vin"
                  component={FormikTextField}
                  label={intl.formatMessage({
                    id: "vin",
                    defaultMessage: "VIN",
                  })}
                  width={6}
                />

                <Field
                  name="mileage"
                  component={FormikTextField}
                  label={intl.formatMessage({
                    id: "mileage",
                    defaultMessage: "Mileage",
                  })}
                  inputMode="numeric"
                  width={6}
                />

                <Field
                  name="registrationDate"
                  component={FormikTextField}
                  label={intl.formatMessage({
                    id: "registrationDate",
                    defaultMessage: "Registration date",
                  })}
                  type="date"
                  width={6}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-between space-x-4 space-y-4 border-t border-t-slate-300 bg-sky-50 p-4 dark:border-t-slate-600 dark:bg-sky-900 md:flex-nowrap md:space-y-0">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => resetForm()}
                  disabled={isSubmitting}
                  className="basis-full md:basis-auto"
                >
                  <FormattedMessage id="reset" defaultMessage="Reset" />
                </Button>

                <div className="flex basis-full justify-center space-x-2 md:basis-auto">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => router.push("/")}
                    disabled={isSubmitting}
                  >
                    <FormattedMessage id="cancel" defaultMessage="Cancel" />
                  </Button>

                  <Button type="submit" disabled={isSubmitting}>
                    <FormattedMessage id="create" defaultMessage="Create" />
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};
