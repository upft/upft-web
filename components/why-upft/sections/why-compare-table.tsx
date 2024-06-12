export default function WhyCompareTable() {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-white bg-blue border-2 dark:text-white font-extrabold text-2xl">
        <tr>
          <th scope="col" className="px-8 py-5">
            Feature/Aspect
          </th>
          <th scope="col" className="px-8 py-5">
            DataInceptor
          </th>
          <th scope="col" className="px-8 py-5">
            Release
          </th>
          <th scope="col" className="px-8 py-5">
            Tonic AI
          </th>
          <th scope="col" className="px-8 py-5">
            Snaplet
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Target Audience</td>
          <td className="px-8 py-5">Broad (Developers, QA, PM, CSM, Sales)</td>
          <td className="px-8 py-5">Primarily Developers</td>
          <td className="px-8 py-5">Primarily Developers</td>
          <td className="px-8 py-5">Primarily Developers</td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Data Seeding</td>
          <td className="px-8 py-5">Customizable, no prod data access</td>
          <td className="px-8 py-5">Yes, but not customizable</td>
          <td className="px-8 py-5">Customizable, prod data access</td>
          <td className="px-8 py-5">No</td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Ephemeral Environments</td>
          <td className="px-8 py-5 ">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#46D414"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              Yes (Nimbus)
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#46D414"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              Yes
            </span>
          </td>
          <td className="px-8 py-5">Only for the database</td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Load Testing</td>
          <td className="px-8 py-5 ">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#46D414"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              Yes (LoadLens)
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Data Privacy</td>
          <td className="px-8 py-5">High (No prod data access)</td>
          <td className="px-8 py-5">Moderate (Requires prod data access)</td>
          <td className="px-8 py-5">Moderate (Requires prod data access)</td>
          <td className="px-8 py-5">Moderate (Requires prod data access)</td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Collaboration</td>
          <td className="px-8 py-5">High (Across different departments)</td>
          <td className="px-8 py-5">Low (Focused on development)</td>
          <td className="px-8 py-5">Low (Focused on development)</td>
          <td className="px-8 py-5">Low (Focused on development)</td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">24/7 Support</td>
          <td className="px-8 py-5 ">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#46D414"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              Yes (LoadLens)
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
          <td className="px-8 py-5">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFC700"
                className="mx-1 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              No
            </span>
          </td>
        </tr>
        <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
          <td className="px-8 py-5 font-semibold">Cost-Effectiveness</td>
          <td className="px-8 py-5">High (Affordable solutions)</td>
          <td className="px-8 py-5">Low</td>
          <td className="px-8 py-5">Low</td>
          <td className="px-8 py-5">Moderate (Offer less features)</td>
        </tr>
      </tbody>
    </table>
  );
}
