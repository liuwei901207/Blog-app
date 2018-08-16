import React from 'react'
import { connect } from 'dva'
import styles from './index.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class Login extends React.Component {

  // 初始化State
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // 事件
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, {username, password, rememberMe}) => {
      if (!err) {
        this.props.dispatch({
          type: 'user/login',
          payload: {username, password, rememberMe},
        })
      }
    })
  }

  // 组件Dom
  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className={styles['login']}>
        <div className={styles['login-wrapper']}>
          <h1 className={styles['login-title']}>博客系统 - 后台管理</h1>
          <Form
            onSubmit={this.handleSubmit}
            className={styles['login-form']}
          >
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{required: true, message: '请输入管理员账号!'}],
              })(
                <Input
                  prefix={<Icon type="user"
                                style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="Username"/>,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请输入管理员密码!'}],
              })(
                <Input
                  prefix={<Icon type="lock"
                                style={{color: 'rgba(0,0,0,.25)'}}/>}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('rememberMe', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>,
              )}
              <Button
                type="primary"
                htmlType="submit"
                className={styles['login-form-button']}
                loading={this.props.loading}
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const WrappedLogin = Form.create()(Login)

// 将model中的state变成组件的props
function mapStateToProps (state) {
  console.log(state)
  return {
    loading: state.loading.models.user,
  }
}

export default connect(mapStateToProps)(WrappedLogin)