
interface Contact{
    contactId:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    role:string,
    notes?:string,
    company?:string,
    avatar?:string | null
}

export const contactSeedData:Contact [] = [
    {
        contactId:'10',
        firstName: 'Jone',
        lastName: 'Doe',
        email: 'jone.doe@example.com',
        phone: '123-456-7890',
        role:'Software Enginner',
        company: 'Dell',
        notes: 'To help me get an interview, met him in the Dell event',
        avatar: null
    },
    {
        contactId:'20',
        firstName: 'Jose',
        lastName: 'Ramirez',
        email: 'jose.ramirez@example.com',
        phone: '123-456-7800',
        role:'Recruiter',
        company: 'Amazon',
        notes: 'Recruiter reached out to me on 1/14/2024',
        avatar: null
    },
    {
        contactId:'30',
        firstName: 'Michael',
        lastName: 'Jonhson',
        email: 'michael.johnson@example.com',
        phone: '789-012-3456',
        role:'Talent Acqusition',
        company: 'IPG',
        notes: 'To help me get an interview, met him in the Dell event',
        avatar: null
    },
    {
        contactId:'40',
        firstName: 'Jody',
        lastName: 'Doe',
        email: 'jody.doe@example.com',
        phone: '123-456-7890',
        role:'Software Enginner',
        company: 'Dell',
        notes: 'Luisa Friend to help me get my resumed in front of hiring manager',
        avatar: null
    },
    {
        contactId:'50',
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emily.brown@example.com',
        phone: '012-345-6789',
        role:'Hiring Manager',
        company: 'Devox.Inc',
        notes: 'last round interview with her',
        avatar: null
    },
    {
        contactId:'60',
        firstName: 'David',
        lastName: 'Martinez',
        email: 'david.martinez@example.com',
        phone: ' 234-567-8901',
        role:'Front-End Developer Lead',
        company: 'Sonic',
        notes: 'Lead developer, very strong questions, oriented in best practices',
        avatar: null
    },
    {
        contactId:'70',
        firstName: 'Sarah',
        lastName: 'Nguyen',
        email: 'sarah.nguyen@example.com',
        phone: '567-890-1234',
        role:'Graphic Designer',
        company: 'Freelancer',
        notes: 'To help me get Job tracker design app',
        avatar: null
    }
]