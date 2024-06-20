import { CheckIcon, HandThumbUpIcon, UserIcon, AcademicCapIcon, BoltIcon, BookmarkIcon, CodeBracketIcon, RocketLaunchIcon, PlusIcon, MinusIcon, CalendarIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'

const timeline = [
    {
        id: 1,
        content: 'Graduated',
        target: 'University of Kentucky',
        href: '#',
        date: 'May \'24',
        datetime: '2024-05-01',
        icon: AcademicCapIcon,
        iconBackground: 'bg-blue-500', // bg-gray-400
    },
    {
        id: 2,
        content: 'Completed',
        target: 'Senior Design Project',
        href: '#',
        date: 'May \'24',
        datetime: '2024-01-01',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 3,
        content: 'Project',
        target: 'Dribbly Discord Bot',
        href: '#',
        date: 'Mar \'24',
        datetime: '2024-03-01',
        icon: BoltIcon,
        iconBackground: 'bg-yellow-400',
    },
    {
        id: 4,
        content: 'Hired',
        target: 'Silver Fern',
        href: '#',
        date: 'July \'23',
        datetime: '2023-07-01',
        icon: CalendarIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 5,
        content: 'iOS App',
        target: 'TSKR Task Management',
        href: '#',
        date: 'Feb \'23',
        datetime: '2023-02-01',
        icon: DevicePhoneMobileIcon,
        iconBackground: 'bg-purple-500',
    },
    {
        id: 6,
        content: 'Hired',
        target: 'Awesome Inc',
        href: '#',
        date: 'Nov \'20',
        datetime: '2020-11-01',
        icon: CalendarIcon,
        iconBackground: 'bg-gray-400',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Feed() {
    return (
        <div className="flow-root">
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className={classNames(
                                            event.iconBackground,
                                            'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                                        )}
                                    >
                                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {event.content}{' '}
                                            <br />
                                            <a href={event.href} className="font-medium text-gray-900">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
