import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateBukuDto } from './dto/create-buku.dto';
import { UpdateBukuDto } from './dto/update-buku.dto';
import { Buku } from './entities/buku.entity';

@Injectable()
export class BukuService {
  private bukuList: Buku[] = []; 

  create(createBukuDto: CreateBukuDto) {
    const isDuplicate = this.bukuList.some(b => b.judul.toLowerCase() === createBukuDto.judul.toLowerCase());
    if (isDuplicate) {
      throw new ConflictException('Buku dengan judul ini sudah ada di rak!');
    }

    const newBuku: Buku = {
      id: Date.now().toString(),
      ...createBukuDto,
      sudahDibaca: createBukuDto.sudahDibaca ?? false,
    };
    this.bukuList.push(newBuku);
    return newBuku;
  }

  findAll() {
    return this.bukuList;
  }

  findOne(id: string) {
    const buku = this.bukuList.find(b => b.id === id);
    if (!buku) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan!`);
    }
    return buku;
  }

  update(id: string, updateBukuDto: UpdateBukuDto) {
    const buku = this.findOne(id); 
    Object.assign(buku, updateBukuDto);
    return buku;
  }

  remove(id: string) {
    this.findOne(id); 
    this.bukuList = this.bukuList.filter(b => b.id !== id);
    return { message: 'Buku berhasil dihapus' };
  }
}