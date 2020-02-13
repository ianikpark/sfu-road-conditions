# SFU Road Conditions

SFU Road Conditions is a [GitHub Actions](https://github.com/features/actions)-powered email delivery service for commuters to the [Simon Fraser University](https://www.sfu.ca/)'s Burnaby campus. Get email notification about the SFU's road conditions and have a safe trip to the [SFU's main Burnaby campus located atop Burnaby Mountain](https://goo.gl/maps/jwt6t7cHvowhUatP8)!

## Using the Service

### 0. Prerequisites

Because the SFU Road Conditions is powered by [GitHub Actions](https://github.com/features/actions), you need a GitHub account ([sign up here](https://github.com/join)). Working knowledge of [Git](https://git-scm.com/), [GitHub](https://github.com/) (or any other DevOps platforms like [GitLab](https://about.gitlab.com/)), [cron](https://en.wikipedia.org/wiki/Cron), as well as familiarity with one or more programming languages are a plus, if you want to tweak the service, but are not required.

### 1. Setting Up

[Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) your own copy of the [ianikpark/sfu-road-conditions](https://github.com/ianikpark/sfu-road-conditions) repository to your account as follows:

1. Inside the [ianikpark/sfu-road-conditions](https://github.com/ianikpark/sfu-road-conditions) repository, locate the Fork button in the top-right corner of the page.
2. Click **Fork**.

<p align="center">
    <img alt="Image of Fork button" src="https://user-images.githubusercontent.com/16889308/74393103-f0a93480-4dbd-11ea-892c-da0618ac1c04.png">
</p>

### 2. Changing a Scheduled Delivery

_**Note 1:** By default, you will get a delivery everyday at 6:30 AM, Pacific Standard Time (PST)._

If you want to choose a different delivery time, you can do so by making a change in the [send-road-report.yml](.github/workflows/send-road-report.yml) file. Change the value of `cron` under `schedule` using [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07).

_**Note 2:** Linux's crontab works at the system time but GitHub Actions' schedule works at [UTC (Coordinated Universal Time)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)._

```yaml
...

# Schedule a workflow to run at the following UTC time using POSIX
# cron syntax
schedule:
    - cron: 30 14 * * *     # 14:30 UTC <=> 06:30 PST

...
```

_**Note 3:** You can use [crontab guru](https://crontab.guru/) to help generate your cron syntax and confirm what time it will run. Do note GitHub Actions does not support the non-standard syntax `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly`, and `@reboot`. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html)_.

#### 2.1. Receiving Multiple Deliveries Everyday

Simply, make as many `cron` jobs as you want under `schedule`. The following example sends an email at

1. 6:30 AM;
2. 12:00 PM, PST; and
3. every 5 minutes.

```yaml
...

# Schedule a workflow to run at the following UTC time using POSIX
# cron syntax
schedule:
    - cron: 30 14 * * *     # 14:30 UTC <=> 06:30 PST
    - cron: 0 20 * * *      # 20:00 UTC <=> 12:00 PST

    # * is a special character in YAML so you have to quote this string.
    # The shortest interval you can run scheduled workflows is once every 5 minutes.
    - cron: '*/5 * * * *'   # every 5 mins
...
```

## Feedback

* If you've found this project interesting or useful, please give this repository a Star by clicking the Star button in the top-right corner of the page.
* Have you identified a problem? Have a feature request? Please [file an issue](https://github.com/ianikpark/sfu-road-conditions/issues)!
* If you'd like to just drop me a line and/or connect:
    * ianikpark@gmail.com
    * [LinkedIn](https://linkedin.com/in/ianikpark)

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2020 [Ian Park](https://github.com/ianikpark).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
