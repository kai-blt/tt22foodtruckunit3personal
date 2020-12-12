//State maping for connected components

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        addSuccess: state.addSuccess,
        role: state.role,
        username: state.username,
        dinerId: state.dinerId,
        operatorId: state.operatorId,
        error: state.error,
        data: state.data,
        favorites: state.favorites,
    };
};

export default mapStateToProps;