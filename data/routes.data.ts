import { Routes } from "@/types"

export const routes: Routes[] = [
  {
    title: 'Initial Setup',
    route: '/init'
  },
  {
  title: 'Wise',
  childrens: [
    {
      id: 1,
      method: 'cancelPairingForGateway',
      route: '/wise/cancelPairingForGateway'
    },
    {
      id: 2,
      method: 'devicePair',
      route: '/wise/devicePair'
    }
  ]
},
{
  title: 'Announcement',
  childrens: [
    {
      id: 1,
      method: 'bulk',
      route: '/announcement/bulk'
    },
    {
      id: 2,
      method: 's',
      route: '/announcement/s'
    }
  ]
}]