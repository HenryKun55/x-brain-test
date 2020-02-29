export default function isAuth(): boolean {
  return localStorage.getItem('isAuth') === 'true';
}
