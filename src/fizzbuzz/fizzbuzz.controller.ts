import { Controller, Get, Param } from '@nestjs/common';
import { FizzbuzzService } from './fizzbuzz.service';


@Controller('fizzbuzz')
export class FizzbuzzController {
    constructor(private readonly _service: FizzbuzzService) { }

    @Get(':id')
    fizzbuzz(@Param('id') numero: number): string {
        return this._service.fizzbuzz(numero)
    }
}
