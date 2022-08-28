const useAddNewUser = (inputs) => {
    const addNewUser = () => {
        if (localStorage.getItem('users') === null) {
            localStorage.setItem(
                'users',
                JSON.stringify([{ ...inputs, id: 11 }])
            );
        } else {
            const currentUsers = JSON.parse(localStorage.getItem('users'));
            let largestId = currentUsers[0].id;
            for (let i = 0; i < currentUsers.length; i++) {
                if (largestId < currentUsers[i].id ) {
                    largestId = currentUsers[i].id;
                }
            }
            const newUserId = largestId + 1;
            localStorage.setItem('users', JSON.stringify([...currentUsers, {...inputs, id: newUserId}]));
        }
    };
    return addNewUser
};

export default useAddNewUser;
