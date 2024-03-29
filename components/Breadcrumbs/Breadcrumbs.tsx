import { FormattedMessage } from "react-intl";
import Link from "next/link";

interface BreadcrumbsProps {
  registrationNumber?: string;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <nav className="mb-4 font-sans text-base font-normal">
      <ol className="flex space-x-2">
        <li>
          <Link
            href="/"
            className="text-sky-600 underline hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-500"
          >
            <FormattedMessage id="home" defaultMessage="Home" />
          </Link>
        </li>
        {props.registrationNumber && (
          <>
            <li
              className="text-slate-500 dark:text-slate-100"
              aria-hidden="true"
            >
              /
            </li>
            <li className="text-slate-500 dark:text-slate-100">
              {props.registrationNumber}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
