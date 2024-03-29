import Filter from '@/components/Filter'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResource } from '@/sanity/actions'
import React from 'react'


const page = async () => {
    const resources = await getResource({
        query: '',
        category: '',
        page: '1'
    });

    console.log(resources);

    return (
        <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
            <section className='w-full'>
                <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
                    <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>Javascript Mastery Resource</h1>
                </div>
                <SearchForm />

                <Filter />

                <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
                    Header
                    <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
                        {resources?.length > 0 ? (
                            resources.map((resources: any) => (
                                <ResourceCard
                                    key={resources._id}
                                    title={ resources.title }
                                    id={resources._id}
                                    image={resources.image}
                                    downloadNumber={resources.views}
                                    slug={resources._id}
                                />
                            ))
                        ) : (
                            <p className='body-regular text-white-400'>
                                No Resource found
                            </p>
                        )}
                    </div>
                </section>
            </section>
        </main>
    )
}

export default page