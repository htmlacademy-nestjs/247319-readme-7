import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from '../dto/create-tag.dto';
import { fillDto } from '@project/helpers';
import { TagRdo } from '../rdo/tag.rdo';
import { UpdateTagDto } from '../dto/update-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService,
  ) {}
  //Теги не тоже самое, что и лайки? почему здесь обходятся в контроллере
  // без PostService и нахождение постЕнтити??
  @Get('/')
  public async index() {
    const allTags = await this.tagsService.getAllTags();
    return fillDto(TagRdo, allTags.map((tag) => tag.toPOJO()));
  }

  @Get('/:postId')
  public async show(@Param('postId') postId: string) {
    const tags = await this.tagsService.getTagsByPostId(postId);

    return fillDto(TagRdo, tags.map((like) => like.toPOJO()));
  }

  @Post('/')
  public async create(@Body() dto: CreateTagDto) {
    const tagEntity = await this.tagsService.createTag(dto);

    return fillDto(TagRdo, tagEntity.toPOJO());
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string, @Body() dto: CreateTagDto) {
    await this.tagsService.deleteTag(id, dto);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateTagDto) {
    const tagEntity = await this.tagsService.updateTag(id, dto);

    return fillDto(TagRdo, tagEntity.toPOJO());
  }
}
