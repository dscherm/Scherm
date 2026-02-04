import type { PedalCircuit } from '../../types/pedal';
import { tubeScreamer } from './tubeScreamer';
import { bigMuff } from './bigMuff';
import { rat } from './rat';
import { fuzzFace } from './fuzzFace';
import { klonCentaur } from './klonCentaur';

export const allPedals: PedalCircuit[] = [
  tubeScreamer,
  bigMuff,
  rat,
  fuzzFace,
  klonCentaur,
];

export { tubeScreamer, bigMuff, rat, fuzzFace, klonCentaur };
