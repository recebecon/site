export type ContactField = "name" | "email" | "phone" | "role" | "segment" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export const contactInitialState: ContactState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
