import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({ example: 'Moderator', description: 'Role name' })
    readonly value: string;
    @ApiProperty({ example: 'Moderates games', description: 'Role description' })
    readonly description: string;
}