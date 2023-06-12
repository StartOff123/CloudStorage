import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({ default: '' })
    email: string

    @ApiProperty({ default: '' })
    fullname: string

    @ApiProperty({ default: '' })
    password: string
}
