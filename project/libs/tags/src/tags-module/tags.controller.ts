import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from '../dto/create-tag.dto';
import { fillDto } from '@project/helpers';
import { TagRdo } from '../rdo/tag.rdo';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagResponseMessage } from './tags.constant';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService,
  ) {}
  //Теги не тоже самое, что и лайки? почему здесь обходятся в контроллере
  // без PostService и нахождение постЕнтити??
  @ApiResponse({
    status: HttpStatus.OK,
    description: TagResponseMessage.AllTags,
    type: TagRdo,
    isArray: true,
  })
  @Get('/')
  public async index() {
    const allTags = await this.tagsService.getAllTags();
    return fillDto(TagRdo, allTags.map((tag) => tag.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagResponseMessage.TagFound,
    type: TagRdo,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: TagResponseMessage.TagNotFound,
  })
  @Get('/:postId')
  public async show(@Param('postId') postId: string) {
    const tags = await this.tagsService.getTagsByPostId(postId);

    return fillDto(TagRdo, tags.map((like) => like.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: TagResponseMessage.TagCreated,
    type: TagRdo,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: TagResponseMessage.TagAlreadyExists,
  })
  @Post('/')
  public async create(@Body() dto: CreateTagDto) {
    const tagEntity = await this.tagsService.createTag(dto);

    return fillDto(TagRdo, tagEntity.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: TagResponseMessage.TagDeleted,
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string, @Body() dto: CreateTagDto) {
    await this.tagsService.deleteTag(id, dto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TagResponseMessage.TagUpdated,
    type: TagRdo,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: TagResponseMessage.TagNotFound,
    type: TagRdo,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: TagResponseMessage.TagAlreadyExists,
    type: TagRdo,
  })
  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateTagDto) {
    const tagEntity = await this.tagsService.updateTag(id, dto);

    return fillDto(TagRdo, tagEntity.toPOJO());
  }
}
