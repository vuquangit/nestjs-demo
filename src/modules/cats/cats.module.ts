import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // imports: [CommonModule], // import other module
  exports: [CatsService], // share module
})
export class CatsModule {}

// Dependency injection
// export class CatsModule {
//   constructor(private catsService: CatsService) {}
// }
