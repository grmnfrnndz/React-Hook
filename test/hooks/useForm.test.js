import {act, renderHook} from "@testing-library/react";
import {UseForm} from "../../src/hooks/index.js";

describe('Test on useForm', function () {

    const initialForm = {
        name: 'lepmah',
        email: 'lepmah@lepmah.ru'
    }

    test('Default Value', () => {
        const {result} = renderHook(() => UseForm(initialForm));
        expect(result.current).toEqual({
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
        )
    })

    test('Change field name form', () => {
        const newValue = 'german';
        const fieldName = 'name';

        const {result} = renderHook(() => UseForm(initialForm));
        const {onInputChange} = result.current;

        act(()=> {
            onInputChange({target: {name: fieldName, value: newValue}})
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('Reset form', () => {
        const newValue = 'german';
        const fieldName = 'name';

        const {result} = renderHook(() => UseForm(initialForm));
        const {onInputChange, onResetForm} = result.current;

        act(()=> {
            onInputChange({target: {name: fieldName, value: newValue}});
            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });



});