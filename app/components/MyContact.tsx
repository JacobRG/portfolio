import React from 'react'

const MyContact = () => {
  return (
    <div className='flex flex-row justify-center items-center space-x-12'>
        <div>
            <h1 className='text-2xl'>Get in touch</h1>
            <p>Reach out to me.</p>
        </div>

            <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Collaborate</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                    <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                        collaborate@example.com
                    </a>
                    </dd>
                </div>
                <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                </div>
                </dl>
            </div>
    </div>
  )
}

export default MyContact