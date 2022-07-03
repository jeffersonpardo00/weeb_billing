export interface Client {

  IdClient: number;
  Name1: string;
  Name2: string;
  LastName1: string;
  LastName2: string;
  BirthDate: Date;
  IdentNum: number;

}

export const ClientNull: Client =
{
  IdClient: 0,
  Name1: "",
  Name2: "",
  LastName1: "",
  LastName2: "",
  BirthDate: new Date("01/01/1900"),
  IdentNum: 0
}
