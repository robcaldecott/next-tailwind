import { useQuery, useMutation, useQueryClient } from "react-query";
import type { UseQueryResult, UseMutationResult } from "react-query";
import { http } from "@/utils";
import type { Vehicle, VehiclePayload } from "@/types";

export const useVehicles = (): UseQueryResult<Vehicle[], Response> =>
  useQuery("vehicles", () => http.get("/api/vehicles"));

export const useVehicle = (id: string): UseQueryResult<Vehicle, Response> =>
  useQuery(["vehicle", id], () => http.get(`/api/vehicles/${id}`));

export const useCreateVehicle = (): UseMutationResult<
  Vehicle,
  Response,
  VehiclePayload
> => useMutation((body) => http.post("/api/vehicles", { json: body }));

export const useDeleteVehicle = (): UseMutationResult<
  Vehicle,
  Response,
  string,
  Vehicle[]
> => {
  const queryClient = useQueryClient();

  return useMutation((id) => http.delete(`/api/vehicles/${id}`), {
    onMutate: async (id) => {
      await queryClient.cancelQueries("vehicles");
      // Remove the vehicles immediately
      const previous = queryClient.getQueryData<Vehicle[]>("vehicles");
      if (previous) {
        queryClient.setQueryData(
          "vehicles",
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
      queryClient.invalidateQueries("vehicles");
    },
  });
};
