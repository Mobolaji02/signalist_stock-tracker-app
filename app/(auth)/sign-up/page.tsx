'use client';

import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import Inputfield from "@/components/forms/inputfield";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import FooterLink from "@/components/forms/FooterLink";
// import CountrySelectField from "@/components/forms/CountrySelectField";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName:'',
            email:'',
            password:'',
            country:'US',
            investmentGoals:'Growth',
            riskTolerance: `Medium`,
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'}, );
    const onSubmit= async (data: SignUpFormData) => {
        try {
            console.log(data);
        }catch (e){
            console.error(e);
        }
    }

    return (
        <>
            <h1 className="form-title">Sign Up & personalize</h1>

             <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Inputfield
                    name="full Name"
                    label="Full Name"
                    placeholder="Emmy Don"
                    register={register}
                    error={errors.fullName}
                    validation={ { required: 'Full name is required', minlength: 2 }}

                /> <Inputfield
                    name="email"
                    label="Email"
                    placeholder="emmanueloshuporu@something.com"
                    register={register}
                    error={errors.email}
                    validation={ { required: 'Email name is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' } }

                /> <Inputfield
                    name="password"
                    label="password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={ { required: 'Password is required', minlength: 8 }}
                />

                 {/* <CountrySelectField/> */}

                 <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals }
                    required
                 />
                 <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk Tolerance"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                 />
                 <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred Industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                 />

                 <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                     {isSubmitting ? 'Creating account' : 'Start Your Investing Journey'}
                 </Button>

                 <FooterLink text="Already have an account" linkText="Sign in" href="/sign-in" />
             </form>
        </>
    )
}
export default SignUp