import { auth } from 'app/[locale]/auth';
import { getGuestbookEntries } from 'app/[locale]/db/queries';
import { SignIn, SignOut } from './buttons';
import { Suspense } from 'react';
import Form from './form';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Guestbook',
  description: 'Assine meu livro de visitas e deixe sua marca.',
};

export default function GuestbookPage() {
  const t = useTranslations('Guestbook');
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {t('title')}
      </h1>
      <Suspense>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          {entry.created_by}:
        </span>
        {entry.body}
      </div>
    </div>
  ));
}
