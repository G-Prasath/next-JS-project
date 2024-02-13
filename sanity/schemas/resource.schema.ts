const schema = {
    name : 'resource',
    title : 'Resource',
    type : 'document',
    field : [
        {
            name : 'title',
            title : 'Title',
            type : 'string',
            require,
            validation : (Rule: any) => Rule.required()
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {source : 'title'} 
        },
        {
            name : 'downloadLink',
            title : 'Download Link',
            type : 'url',
            validation : (Rule: any) => Rule.require()
        }
    ]
}