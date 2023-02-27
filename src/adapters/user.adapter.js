export const createUserAdapter = ( user ) => ({
    name: user.results.name.first,
    gender: user.results.gender,
    status: true
});