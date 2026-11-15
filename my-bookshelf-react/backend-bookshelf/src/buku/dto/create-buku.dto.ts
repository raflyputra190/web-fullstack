import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreateBukuDto {
  @IsString()
  @IsNotEmpty()
  judul: string;

  @IsString()
  @IsNotEmpty()
  penulis: string;

  @IsNumber()
  @Min(1900)
  tahunRilis: number;

  @IsBoolean()
  @IsOptional()
  sudahDibaca?: boolean;
}