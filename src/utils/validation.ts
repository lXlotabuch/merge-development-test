export const validInput = (value: string, name: string) => {
  if (name === 'email') {
    if (value.trim() === '') {
      return { error: true, massage: 'Field required!' };
    }
    if (
      !value.match(
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      return { error: true, massage: 'Invalid Email' };
    }
    if (value.length < 3 || value.length > 20) {
      return { error: true, massage: 'Length muth be from 3 to 20' };
    }
  }
  if (name === 'password') {
    if (value.trim() === '') {
      return { error: true, massage: 'Field required!' };
    }
    if (value.length < 6 || value.length > 20) {
      return { error: true, massage: 'Length muth be from 6 to 20' };
    }
    if (
      !value.match(
        /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/,
      )
    ) {
      return { error: true, massage: 'In pass must be 0-9, a-z, A-Z, @#$' };
    }
  }
  return { error: false };
};
