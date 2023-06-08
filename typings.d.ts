interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

export interface Image extends SanityBody {
  _type: 'image'
  asset: {
    ref: string
    _type: 'reference'
  }
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  role: string
  heroImage: Image
  profilePic: Image
  name: string
  phoneNumber: string
}
export interface Technologies extends SanityBody {
  _type: 'technologies'
  image: Image
  progress: number
  title: string
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  linkToBuild: string
  image: Image
  summary: string
  technologies: Technologies[]
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImage: Image
  dateStarted: date
  dateEnded: data
  IsCurrentlyWorkingHere: boolean
  jobTitle: string
  points: string[]
  technologies: Technologies[]
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}
