import { FormattedMessage } from "react-intl";
import Link from "next/link";

interface BreadcrumbsProps {
  registrationNumber?: string;
}

export const Breadcrumbs = ({ registrationNumber }: BreadcrumbsProps) => (
  <nav className="font-sans text-base font-normal mb-4">
    <ol className="flex space-x-2">
      <li>
        <Link href="/">
          <a className="text-sky-600 hover:text-sky-900 underline">
            <FormattedMessage id="home" defaultMessage="Home" />
          </a>
        </Link>
      </li>
      {registrationNumber && (
        <>
          <li className="text-slate-500" aria-hidden="true">
            /
          </li>
          <li className="text-slate-500">{registrationNumber}</li>
        </>
      )}
    </ol>
  </nav>
);
