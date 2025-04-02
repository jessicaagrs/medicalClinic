import { planActions } from '@/actions/planActions';
import FormRegister from '@/components/register/FormRegister';

export default async function Register() {
  const plans = await planActions.getPlans();
  return <FormRegister dataPlans={plans} />;
}
