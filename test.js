import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 20,           // 20 utilisateurs virtuels simultanés
  duration: '5h45m',  // reste sous la limite de 6h de GitHub Actions
};

export default function () {
  http.get('https://terterr.com');
  sleep(1); // 1 seconde entre chaque requête par utilisateur virtuel
}
