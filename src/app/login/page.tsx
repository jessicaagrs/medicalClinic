import FormLogin from '../../components/login/FormLogin';

export default async function Layout(
  props: Readonly<{
    params: Promise<{ clinic: string }>;
  }>
) {
  const { params } = props;

  const { clinic } = await params;

  return <FormLogin clinic={clinic} />;
}
