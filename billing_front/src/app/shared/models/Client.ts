export interface Client {

  idClient: number;
  name1: string;
  name2: string;
  lastName1: string;
  lastName2: string;
  birthDate: Date;
  identNum: number;

}

export const ClientNull: Client =
{
  idClient: 0,
  name1: "",
  name2: "",
  lastName1: "",
  lastName2: "",
  birthDate: new Date("01/01/1900"),
  identNum: 0
}
