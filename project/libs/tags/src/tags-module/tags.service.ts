import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { TagsRepository } from './tags.repository';
import { CreateTagDto } from '../dto/create-tag.dto';
import { TagsEntity } from './tags.entity';
import { UpdateTagDto } from '../dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    private readonly tagsRepository: TagsRepository,
  ) {}

  public async createTag(dto: CreateTagDto) {
    dto.title = dto.title.toLocaleLowerCase();

    const tagEntityExist = await this.tagsRepository.findByTitle(dto.title);
    if (tagEntityExist) {
      throw new ConflictException(`Tag with title: ${dto.title} already exists`)
    }

    const tagEntity = TagsEntity.createNewObject(dto);
    await this.tagsRepository.save(tagEntity);

    return tagEntity;
  }

  public async deleteTag(id: string, dto: CreateTagDto) {
    const tagEntityExist = await this.tagsRepository.findByTitle(dto.title);
    if (!tagEntityExist) {
      throw new ConflictException('Tag does not exist');
    }
    await this.tagsRepository.deleteById(id);
  }

  public async updateTag(id: string, dto: UpdateTagDto) {
    dto.title = dto.title.toLocaleLowerCase();

    const tagEntityExist = await this.tagsRepository.findByTitle(dto.title);
    if (tagEntityExist) {
      throw new ConflictException(`Tag with title: ${dto.title} already exists`)
    }

    const tagEntity = await this.tagsRepository.findById(id);
    tagEntity.title = dto.title.toLocaleLowerCase();
    if (!tagEntity) {
      throw new NotFoundException(`Tag with id: ${id} not found`);
    }
    await this.tagsRepository.update(tagEntity);
    return tagEntity;
  }

  public async getTagById(id: string): Promise<TagsEntity> {
    return this.tagsRepository.findById(id);
  }

  public async getAllTags() {
    return this.tagsRepository.findAll();
  }

  public async getTagsByPostId(postId: string): Promise<TagsEntity[]> {
    return this.tagsRepository.findByPostId(postId);
  }
}
