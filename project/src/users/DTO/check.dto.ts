import { IsNotEmpty } from "class-validator";
export class check
{
    @IsNotEmpty({message:"Can not be empty"})
    title:string
}
