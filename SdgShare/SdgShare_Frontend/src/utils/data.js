//Following Sanity Docs To Write The Syntax
export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`; //Try To Give Me A Document With This ID And This Type Of User
    return query;
};

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match ]{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _key,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }`;
    return query;
};

export const feedQuery = `*[_type == 'pin'] | order(_createdAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy -> {
        _id,
        userName,
        image
    },
    save[] {
        _key,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
}`;
