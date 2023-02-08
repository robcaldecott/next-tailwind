import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from ".";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta<typeof Dialog>;

export const Open: StoryObj<typeof Dialog> = {
  render: (args) => (
    <Dialog
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      {...args}
    >
      <DialogTitle id="dialog-title">
        Use Google&apos;s location service?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="secondary" onClick={args.onClose}>
          Disagree
        </Button>
        <Button variant="primary" onClick={args.onClose}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  ),
  args: {
    open: true,
  },
};
