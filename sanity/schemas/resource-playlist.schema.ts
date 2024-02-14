const schema = {
    name : 'resourcePlaylist',
    title : 'Resource Playlist',
    type : 'document',
    field : [
        {
            name : 'title',
            title : 'Title',
            type : 'string',
            validation : (Rule:any) => Rule.required()
        },
        {
            name : 'resource',
            title : 'Resource',
            type : 'array',
            of : [
                {type : 'referance', to: [{type : 'resource'}]}
            ]
        }
    ]
}

export default schema;