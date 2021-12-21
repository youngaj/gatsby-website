import dayjs from 'dayjs'
interface Info {
   me: AboutMeInfo
   nasa: NASAInfo
}

interface AboutMeInfo {
   firstName: string
   lastName: string
   email: string
   age: number
   workExperience: WorkExperience[]
   social: Social[]
   projects: Project[]
   podcastAppearances: PodcastAppearance[]
}

interface WorkExperience {
   company: string
   title: string
   start: string
   end: string
   responsibilities: string[]
}

interface Social {
   name: string
   username: string
   link: string
}

interface Project {
   title: string
   description: string
   code?: Code
}

interface Code {
   repo: string
   url: string
}

interface PodcastAppearance {
   pocketCastUUID: string
   podcastName: string
   topic: string
   description?: string
   url?: string
}

interface NASAInfo {
   lastDay: string
}

export const info: Info = {
   me: {
      firstName: 'Andre',
      lastName: 'Young',
      email: 'andrejyoung@gmail.com',
      age: dayjs().diff(dayjs('1979-09', 'YYYY-MM'), 'years'),
      workExperience: [
         {
            company: 'Capital One',
            title: 'Senior Manager, Software Engineering',
            start: '2020-04',
            end: '',
            responsibilities: [
               'Technical lead for the Safehouse and Discovery teams.',
               'Talent and Performance management.',
               'Development and coaching team members.',
            ],
         },
         {
            company: 'ASRC Inuteq (NASA)',
            title: 'Application Development Lead & IT Lead',
            start: '2012-07',
            end: '2020-04',
            responsibilities: [
               'I served as the Application Development Lead for the contract, participating in senior management discussions and setting development goals and standards for the contract.',
               'I mentored developers at all levels, providing feedback on code and career coaching.',
               'I also served as the Lead developer and primary point of contact for 5 active projects with 3 separate customers including a redesign and re-platforming of the Exploration & Space Communications (ESC) public website from Drupal to Gatsby, NodeJS and ASP.NET Core.',
               'Lastly I served as the IT manager for the Exploration & Space Communications Division (Code 450) managing both development and operation activities.',
            ],
         },
         {
            company: 'ASRC PRIMUS (NASA)',
            title: 'Senior Application Developer',
            start: '2011-07',
            end: '2012-07',
            responsibilities: [
               `Designed and implemented new features for an online intern registration and selection (SOLAR) system. Provided architectural design support for the next version a large configuration management (CM) tool used by multiple flight projects at NASA's Goddard Space Flight Center (GSFC). Assisted with other applications as needed.`,
            ],
         },
         {
            company: 'ASRC Federal (NASA)',
            title: 'Senior Programmer',
            start: '2007-07',
            end: '2011-07',
            responsibilities: [
               `Tailored large scaled CM applications written primarily in Classic ASP to meet changing user requirements and needs.`,
            ],
         },
         {
            company: 'Systems Management Engineering Inc',
            title: 'Software Engineer',
            start: '2007-05',
            end: '2007-07',
            responsibilities: [
               `Implement modules for Peace Corps’ Volunteer Information Database Application Project (VIDA) to transition from MS Access to a .Net 2.0 Winforms application. (MS SQL, ADO.Net, Data Dynamics ActiveReports, Infragistics NetAdvantage)`,
            ],
         },
      ],
      social: [
         {
            name: 'GitHub',
            username: 'youngaj',
            link: 'https://github.com/youngaj',
         },
         {
            name: 'Twitter',
            username: '@Dreyoung79',
            link: 'https://twitter.com/Dreyoung79',
         },
         {
            name: 'YouTube',
            username: 'youngaj',
            link:
               'https://www.youtube.com/channel/UCr-_BId5w_QTTKcthhNRVlw/videos',
         },
         {
            name: 'LinkedIn',
            username: 'Andre Young',
            link: 'https://www.linkedin.com/in/andre-young-b9a9b5b/',
         },
      ],
      projects: [
         {
            title: 'Commercial Real Estate Management (CREM)',
            description: 'Improve rent collection and property management',
         },
         {
            title: 'OneStream & Snowflake',
            description:
               'Gain insights into the Focus Platform by recording events via OneStream (Kafka) into Snowflake and internal C1 data lake.',
         },
         {
            title: 'Conveyor Belt (CB)',
            description:
               'Meta-platform to enable internal development teams to onboard and easily use internal platforms.  Drives down cycle times and ensures governance by preventing intents without the appropriate approvals from being deployed into protected environments.',
         },
         {
            title: 'Website',
            description: 'Gatsby redesign of this website',
            code: {
               repo: 'gatsby-website',
               url: 'https://github.com/youngaj/gatsby-website',
            },
         },
      ],
      podcastAppearances: [
         {
            pocketCastUUID: '3414c425-da9f-4b6d-82bf-2062b636d03d',
            podcastName: 'Web Rush',
            topic: 'From IC to PL',
            description: '',
            url:
               'https://webrush.io/episodes/episode-164-rising-stumbling-and-getting-up-again-life-as-a-tech-manager',
         },
         {
            pocketCastUUID: '358e82f0-a54e-0136-7b93-27f978dac4db',
            podcastName: 'Web Rush',
            topic: 'Testing',
            description: '',
            url:
               'https://webrush.simplecast.com/episodes/episode-143-old-man-yells-at-tests-andre-young',
         },
      ],
   },
   nasa: {
      lastDay: '2020/04/20',
   },
}
