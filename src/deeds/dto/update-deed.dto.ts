import { PartialType } from "@nestjs/mapped-types";
import { CreateDeedDto } from "src/deeds/dto/create-deed.dto";

export class UpdateDeedDto extends PartialType(CreateDeedDto) { };