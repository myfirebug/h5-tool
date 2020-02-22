/*
 * @description: 模块描述
 * @Author: yany
 * @Date: 2019-09-12 16:02:16
 * @LastEditors: yany
 * @LastEditTime: 2019-09-17 14:54:41
 */
import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'antd';

class CreateSearchForm extends Component {
    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSearch(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form
                layout='inline'
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                onSubmit={this.handleSearch}
            >
                <Form.Item>
                    {getFieldDecorator('keyword', {
                        rules: [
                            {
                                required: false
                            }
                        ]
                    })(
                        <Input
                            placeholder={this.props.keywordPlaceholder}
                            style={{ width: 260 }}
                        />
                    )}
                    <Button type='primary' htmlType='submit'>
                        <Icon type='search' />
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const SearchForm = Form.create({ name: 'createSearchForm' })(CreateSearchForm);

export default SearchForm;
