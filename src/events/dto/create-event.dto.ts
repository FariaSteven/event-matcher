import { IsString } from 'class-validator'

export class CreateEventDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    local: string;

    constructor(
        name: string,
        description: string,
        local: string,
    ) {
        this.name = name;
        this.description = description;
        this.local = local
    }
}
