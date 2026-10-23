export type Pendencia = {
  condominium: string;
  unit: string;
  description: string;
  amount: string;
  dueDate: string;
  status: string;
};

export type ConsultaState = {
  status: "idle" | "error" | "empty" | "found";
  message: string;
  documentLabel: string;
  items: Pendencia[];
};

export const consultaInitialState: ConsultaState = {
  status: "idle",
  message: "",
  documentLabel: "",
  items: [],
};
