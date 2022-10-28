import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {

    fizzbuzz(numero: number): string {
        if (numero < 1 || numero > 100) {
            return;
        }

        if (numero % 15 === 0) {
            return 'fizzbuzz';
        }

        if (numero % 3 === 0) {
            return 'fizz';
        }

        if (numero % 5 === 0) {
            return 'buzz'
        }

        return numero.toString();
    }

}
