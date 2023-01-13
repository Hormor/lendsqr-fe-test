import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export type User = {
  id: number
  orgName: string
  userName: string
  email: string
  phoneNumber: string
  createdAt: Date
  status: string
  profile: {
    avatar: string
    firstName: string
    lastName: string
    phoneNumber: string
    bvn: number
    gender: string
  }
  education: {
    level: string
    employmentStatus: string
    sector: string
    duration: string
    officeEmail: string
    loanRepayment: number
  monthlyIncome: Array<number>

  }
  socials: {
    twitter: string
    facebook: string
    instagram: string
  }
  guarantor: {
    firstName: string
    lastName: string
    phoneNumber: string
  }
  accountNumber: number
}