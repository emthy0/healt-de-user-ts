import {FC} from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form";

import {setBasicInfo, setUserInfo} from '@store/user'

export const RegisterForm: FC = () => {
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
    }
  });
  const onSubmit = (data: any) => {
    dispatch(setBasicInfo(data));
    dispatch(setUserInfo)
    console.log(data)
  }

  return (
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="firstname"
          />
        )}
        name="firstname"
      />
      {errors.firstname && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="lastname"
          />
        )}
        name="lastname"
      />

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="email"
          />
        )}
        name="email"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}