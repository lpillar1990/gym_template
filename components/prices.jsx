import { CheckIcon } from '@heroicons/react/outline'

const membershipFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const payasyougoFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const openinghoursFeatures = [
  'Monday 6am - 9pm',
  'Tuesday 6am - 9pm',
  'Wednesday 6am - 9pm',
  'Thursday 6am - 9pm',
  'Friday 6am - 9pm',
  'Saturday 9am - 1pm',
  'Sunday 9am - 12pm',

]

export default function Prices() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl ">
      <div className="pb-12 mt-16 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 lg:h-2/3" />
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-10 bg-white">
                      <div>
                        <h3 className="text-2xl font-medium text-center text-gray-900" id="tier-hobby">
                          Membership
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">£</span>
                            <span className="font-extrabold">25</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {membershipFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        {/* <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full px-6 py-3 text-base font-medium text-center text-indigo-600 bg-white border border-transparent rounded-lg hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Start your trial
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-lg mx-auto mt-10 lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="absolute inset-0 border-2 border-red-800 rounded-lg pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase rounded-full">
                        {/* Most popular */}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
                    <div>
                      <h3 className="text-3xl font-semibold text-center text-gray-900 sm:-mx-6" id="tier-growth">
                        Opening Hours
                      </h3>
                      {/* <div className="flex items-center justify-center mt-4">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">£</span>
                          <span className="font-extrabold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">/month</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="px-6 pt-10 pb-8 bg-gray-300 border-t-2 border-gray-100 rounded-b-lg sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {openinghoursFeatures.map((feature) => (
                        <li key={feature} className="items-start text-center ">
                          {/* <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                          </div> */}
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    {/* <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          className="block w-full px-6 py-4 text-xl font-medium leading-6 text-center text-white bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto mt-10 lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-10 bg-white">
                      <div>
                        <h3 className="text-2xl font-medium text-center text-gray-900" id="tier-scale">
                          Pay as you Go
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">£</span>
                            <span className="font-extrabold">5</span>
                          </span>
                          {/* <span className="text-xl font-medium text-gray-500">/month</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {payasyougoFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 w-6 h-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        {/* <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            className="block w-full px-6 py-3 text-base font-medium text-center text-indigo-600 bg-white border border-transparent rounded-lg hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}